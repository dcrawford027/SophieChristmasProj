'use strict';

const validUserName = 'Agent Tempe';
const validPassword = 'password';

const loginModal = document.querySelector('.login-modal');
const overlay = document.querySelector('.overlay');
const txtDenied = document.querySelector('#Denied');
const btnLogin = document.querySelector('.btn-login');
const btnStart = document.querySelector('.btn-start');
const btnFile = document.querySelector('.btn-file');
const dropupContent = document.querySelector('.dropup-content');
const emailModal = document.querySelector('.modal-email');

const closeLoginModal = function () {
  loginModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnLogin.addEventListener('click', function () {
  if (document.getElementById('UserName').value == validUserName && document.getElementById('Password').value == validPassword) {
    closeLoginModal();
  } else {
    txtDenied.classList.remove('hidden');
    document.getElementById('UserName').value = '';
    document.getElementById('Password').value = '';
  }
});

btnStart.addEventListener('click', function() {
    if (dropupContent.classList.contains('hidden')) {
        dropupContent.classList.remove('hidden');
    } else {
        dropupContent.classList.add('hidden');
    }
});

btnFile.addEventListener('click', function() {
    if (emailModal.classList.contains('hidden')) {
        emailModal.classList.remove('hidden');
    } else {
        emailModal.classList.add('hidden');
    }
})