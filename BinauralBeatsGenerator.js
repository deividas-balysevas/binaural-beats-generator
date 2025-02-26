import React, { useState, useEffect, useRef } from 'react';
import * as Tone from 'tone';

const BinauralBeatsGenerator = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [baseFrequency, setBaseFrequency] = useState(200);
  const [beatFrequency, setBeatFrequency] = useState(10);
  const [volume, setVolume] = useState(-10);
  const [selectedPreset, setSelectedPreset] = useState('alpha');
  
  const leftOscillator = useRef(null);
  const rightOscillator = useRef(null);
  const leftPanner = useRef(null);
  const rightPanner = useRef(null);
  const volumeNode = useRef(null);
  
  // Brainwave presets
  const presets = {
    delta: { name: 'Delta (0.5-4 Hz)', base: 200, beat: 2, description: 'Deep sleep, healing' },
    theta: { name: 'Theta (4-8 Hz)', base: 220, beat: 6, description: 'Meditation, creativity' },
    alpha: { name: 'Alpha (8-13 Hz)', base: 200, beat: 10, description: 'Relaxation, calm focus' },
    beta: { name: 'Beta (13-30 Hz)', base: 200, beat: 15, description: 'Concentration, alertness' },
    gamma: { name: 'Gamma (30-100 Hz)', base: 300, beat: 40, description: 'Peak cognitive performance' }
  };

  const applyPreset = (presetKey) => {
    setSelectedPreset(presetKey);
    setBaseFrequency(presets[presetKey].base);
    setBeatFrequency(presets[presetKey].beat);
  };

  useEffect(() => {
    // Initialize audio nodes
    leftPanner.current = new Tone.Panner(-1).toDestination();
    rightPanner.current = new Tone.Panner(1).toDestination();
    volumeNode.current = new Tone.Volume(volume).connect(Tone.Destination);
    
    // Clean up function
    return () => {
      if (leftOscillator.current) {
        leftOscillator.current.stop();
        leftOscillator.current.dispose();
      }
      if (rightOscillator.current) {
        rightOscillator.current.stop();
        rightOscillator.current.dispose();
      }
      if (leftPanner.current) leftPanner.current.dispose();
      if (rightPanner.current) rightPanner.current.dispose();
      if (volumeNode.current) volumeNode.current.dispose();
    };
  }, []);

  useEffect(() => {
    if (volumeNode.current) {
      volumeNode.current.volume.value = volume;
    }
  }, [volume]);

  const togglePlay = async () => {
    if (!isPlaying) {
      // Start audio context if it's not running
      await Tone.start();
      
      // Create new oscillators
      leftOscillator.current = new Tone.Oscillator(baseFrequency, 'sine').connect(leftPanner.current).connect(volumeNode.current);
      rightOscillator.current = new Tone.Oscillator(baseFrequency + beatFrequency, 'sine').connect(rightPanner.current).connect(volumeNode.current);
      
      // Start oscillators
      leftOscillator.current.start();
      rightOscillator.current.start();
      
      setIsPlaying(true);
    } else {
      // Stop and dispose oscillators
      if (leftOscillator.current) {
        leftOscillator.current.stop();
        leftOscillator.current.dispose();
        leftOscillator.current = null;
      }
      if (rightOscillator.current) {
        rightOscillator.current.stop();
        rightOscillator.current.dispose();
        rightOscillator.current = null;
      }
      
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    if (isPlaying && leftOscillator.current && rightOscillator.current) {
      leftOscillator.current.frequency.value = baseFrequency;
      rightOscillator.current.frequency.value = baseFrequency + beatFrequency;
    }
  }, [baseFrequency, beatFrequency, isPlaying]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Binaural Beats Generator</h1>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-2">Brain Wave Presets</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          {Object.keys(presets).map((key) => (
            <button
              key={key}
              onClick={() => applyPreset(key)}
              className={`p-2 rounded text-sm ${
                selectedPreset === key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {presets[key].name}
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-600 italic">
          {selectedPreset && presets[selectedPreset].description}
        </p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Base Frequency: {baseFrequency} Hz
          </label>
          <input
            type="range"
            min="100"
            max="500"
            value={baseFrequency}
            onChange={(e) => setBaseFrequency(parseInt(e.target.value))}
            className="w-full"
            disabled={isPlaying}
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Beat Frequency: {beatFrequency} Hz
          </label>
          <input
            type="range"
            min="0.5"
            max="50"
            step="0.5"
            value={beatFrequency}
            onChange={(e) => setBeatFrequency(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Volume
          </label>
          <input
            type="range"
            min="-30"
            max="0"
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="text-center">
        <p className="mb-2 text-sm text-gray-600">
          Currently generating: Left ear ({baseFrequency} Hz) + Right ear ({(baseFrequency + beatFrequency).toFixed(1)} Hz)
          = {beatFrequency} Hz binaural beat
        </p>
        <button
          onClick={togglePlay}
          className={`px-6 py-3 rounded-full font-semibold text-white ${
            isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isPlaying ? 'Stop' : 'Play'}
        </button>
      </div>
      
      <div className="mt-6 text-sm text-gray-600">
        <p className="font-semibold">Important notes:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Headphones are required for binaural beats to work properly</li>
          <li>Start with shorter sessions (5-15 minutes) and lower volumes</li>
          <li>If you experience any discomfort, stop immediately</li>
          <li>Binaural beats may not be suitable for people with seizure disorders</li>
        </ul>
      </div>
    </div>
  );
};

export default BinauralBeatsGenerator;