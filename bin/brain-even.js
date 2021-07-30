#!/usr/bin/env node
import Greetings from '../src/cli.js';
import {
    StartGameEven,
    Question,
    GameEven,
  } from '../src/games/even.js';
Greetings ();
StartGameEven ();
Question();
GameEven();
