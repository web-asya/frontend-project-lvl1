#!/usr/bin/env node
import Greetings from '../src/cli.js';
import {
    Question,
    startgame,
    GameEven,
  } from '../src/games/even.js';
Greetings ();
console.log (startgame);
Question();
GameEven();
