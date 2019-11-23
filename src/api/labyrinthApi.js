import Vue from 'vue';

const signIn = signinData => {
  return Vue.axios.post(
    'https://labyrinth-api.herokuapp.com/api/users/signin',
    signinData
  );
};

const fetchCurrentUser = () => {
  return Vue.axios.get('https://labyrinth-api.herokuapp.com/api/users/current');
};

const getMaze = () => {
  return Vue.axios.get(`https://labyrinth-api.herokuapp.com/api/maze/beginner`);
};

export default { signIn, fetchCurrentUser, getMaze };
