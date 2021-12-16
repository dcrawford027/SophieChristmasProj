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
const dropupContent = document.querySelector('.dropup-content');
const emailModal = document.querySelector('.modal-email');

const closeLoginModal = function () {
  loginModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const closeEmail = function() {
  emailModal.classList.add('hidden');
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

btnFile.addEventListener('click', function() {
    emailModal.classList.remove('hidden');
})

btnCloseEmail.addEventListener('click', closeEmail);