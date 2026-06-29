/**
 * ==========================================
 * AG Portfolio
 * Version : v1.0.0
 * File    : main.js
 * Purpose : Application Entry Point
 * ==========================================
 */

'use strict';

import { initNavbar } from './navbar.js';
import { initScroll } from './scroll.js';
import { initAnimations } from './animations.js';
import { initProjects } from './projects.js';
import { initTheme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {

    console.log('AG Portfolio Initialized');

    initTheme();
    initNavbar();
    initScroll();
    initAnimations();
    initProjects();

});