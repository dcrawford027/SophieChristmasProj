'use strict';

const validUserName = 'Agent Tempe';
const validPassword = 'password';

const loginModal = document.querySelector('.login-modal');
const overlay = document.querySelector('.overlay');
const txtDenied = document.querySelector('#Denied');
const btnLogin = document.querySelector('.btn-login');
const btnStart = document.querySelector('.btn-start');
const btnFile = document.querySelector('.btn-file');
const btnCloseEmail = document.querySelector('.btn-close-email');
const btnCloseWindowFiles = document.querySelector('.btn-close-window-files');
const btnEmail = document.querySelector('.btn-email');
const btnMemoryGame = document.querySelector('.btn-memory-game');
const dropupContent = document.querySelector('.dropup-content');
const emailModal = document.querySelector('.modal-email');
const windowFiles = document.querySelector('.window-files');

const closeLoginModal = function () {
  loginModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeEmail = function() {
  emailModal.classList.add('hidden');
}

const openEmail = function() {
  emailModal.classList.remove('hidden');
}

const closeFilesWindow = function() {
  windowFiles.classList.add('hidden');
}

const openFilesWindow = function() {
  windowFiles.classList.remove('hidden');
}

const playMemoryGame = function() {
  window.location.href = '../TopSecretComputer/Memory-Game-fend/index.html';
}

btnLogin.addEventListener('click', function () {
  if (document.getElementById('UserName').value == validUserName && document.getElementById('Password').value == validPassword) {
    closeLoginModal();
  } else {
    txtDenied.classList.remove('hidden');
    document.getElementById('UserName').value = '';
    document.getElementById('Password').value = '';
  }
});

btnEmail.addEventListener('click', openEmail);
btnFile.addEventListener('click', openFilesWindow);
btnCloseEmail.addEventListener('click', closeEmail);
btnCloseWindowFiles.addEventListener('click', closeFilesWindow);
btnMemoryGame.addEventListener('click', playMemoryGame);