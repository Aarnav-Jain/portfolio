import GameEnvBackground from './essentials/GameEnvBackground.js';
import Player from './essentials/Player.js';
import Npc from './essentials/Npc.js';
import AiNpc from './essentials/AiNpc.js';

class GameLevelPrologue {
  constructor(gameEnv) {
    const width = gameEnv.innerWidth;
    const height = gameEnv.innerHeight;
    const path = gameEnv.path;

    const bgData = {
      name: 'prologue_bg',
      greeting: 'Welcome to the prologue. Talk to the AI mentor to test the NPC integration.',
      src: path + '/images/gamebuilder/bg/alien_planet.jpg',
      pixels: { height: 772, width: 1134 }
    };

    const playerData = {
      id: 'Prologue Player',
      greeting: 'Use WASD to move. Walk into the mentor and press E to talk.',
      src: path + '/images/gamify/chillguy.png',
      SCALE_FACTOR: 5,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: width * 0.15, y: height * 0.58 },
      pixels: { height: 384, width: 512 },
      orientation: { rows: 3, columns: 4 },
      down: { row: 0, start: 0, columns: 3 },
      downRight: { row: 1, start: 0, columns: 3, rotate: Math.PI / 16 },
      downLeft: { row: 2, start: 0, columns: 3, rotate: -Math.PI / 16 },
      left: { row: 2, start: 0, columns: 3 },
      right: { row: 1, start: 0, columns: 3 },
      up: { row: 0, start: 0, columns: 3 },
      upLeft: { row: 2, start: 0, columns: 3, rotate: Math.PI / 16 },
      upRight: { row: 1, start: 0, columns: 3, rotate: -Math.PI / 16 },
      hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
      keypress: { up: 87, left: 65, down: 83, right: 68 }
    };

    const mentorData = {
      id: 'AI Mentor',
      greeting: 'Hi, I am the AI Mentor. Press E and ask me how this level works.',
      src: path + '/images/gamify/historyProf.png',
      SCALE_FACTOR: 5,
      ANIMATION_RATE: 10,
      pixels: { height: 263, width: 559 },
      INIT_POSITION: { x: width * 0.55, y: height * 0.52 },
      orientation: { rows: 4, columns: 9 },
      down: { row: 3, start: 0, columns: 9 },
      up: { row: 3, start: 0, columns: 9 },
      left: { row: 3, start: 0, columns: 9 },
      right: { row: 3, start: 0, columns: 9 },
      downLeft: { row: 3, start: 0, columns: 9 },
      downRight: { row: 3, start: 0, columns: 9 },
      upLeft: { row: 3, start: 0, columns: 9 },
      upRight: { row: 3, start: 0, columns: 9 },
      hitbox: { widthPercentage: 0.25, heightPercentage: 0.35 },
      expertise: 'game testing and AI NPCs',
      chatHistory: [],
      dialogues: [
        'Ask me how the AI NPC integration works.',
        'Press E near me, type a question, and I will send it to the backend.',
        'I can explain gameplay testing, API calls, and verification evidence.'
      ],
      knowledgeBase: {
        'game testing and AI NPCs': [
          {
            question: 'How does the AI NPC work?',
            answer: 'The NPC opens a chat box, sends your question to the backend, and displays the AI response in the game.'
          },
          {
            question: 'How can I test this integration?',
            answer: 'Walk to the NPC, press E, ask a question, and confirm that a response appears.'
          },
          {
            question: 'What should I show in Inspect?',
            answer: 'Use the Network tab to show the AI prompt request and the Console tab to show any handled errors.'
          }
        ]
      },
      reaction: function() {
        if (this.dialogueSystem) {
          this.showReactionDialogue();
        } else {
          console.log(this.spriteData?.greeting || 'AI Mentor ready');
        }
      },
      interact: function() {
        AiNpc.showInteraction(this);
      }
    };

    this.classes = [
      { class: GameEnvBackground, data: bgData },
      { class: Player, data: playerData },
      { class: Npc, data: mentorData }
    ];
  }
}

export const gameLevelClasses = [GameLevelPrologue];
export default GameLevelPrologue;
