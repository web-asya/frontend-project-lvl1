#!/usr/bin/env node
import Greetings from '../src/cli.js';
import getRandomInt from '../games/randomaizer.js';
import {
    StartGameEven,
    Question,
    CorrectAnswer,
  } from '../src/games/even.js';
Greetings ();
StartGameEven ();
Question();
CorrectAnswer();
