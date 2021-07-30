#!/usr/bin/env node
import Greetings from '../src/cli.js';
import {
    StartGameEven,
    Question,
    UserAnswer,
  } from '../src/games/even.js';
Greetings ();
StartGameEven ();
Question();
UserAnswer();
