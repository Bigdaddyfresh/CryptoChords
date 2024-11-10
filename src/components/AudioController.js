// src/components/AudioController.js
import React from 'react';
import * as Tone from 'tone';

// Define chords for different transaction types
const chords = {
  hemi: ['C4', 'E4', 'G4'],   // C Major
  ethereum: ['A3', 'C4', 'E4'], // A Minor
  newBlock: ['F3', 'A3', 'C4'], // F Major
  pop: ['G3', 'B3', 'D4'],     // G Major
};

const playChord = (chord) => {
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  synth.triggerAttackRelease(chord, '0.5');
};

const AudioController = ({ transactionType }) => {
  // Play corresponding chord based on transaction type
  React.useEffect(() => {
    if (transactionType && chords[transactionType]) {
      playChord(chords[transactionType]);
    }
  }, [transactionType]);

  return null;
};

export default AudioController;