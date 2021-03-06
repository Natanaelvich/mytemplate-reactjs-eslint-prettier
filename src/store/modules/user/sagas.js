import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signUpSuccess } from './actions';
import api from '~/services/api';
import history from '~/services/services';

function* signIn({ payload }) {
  try {
    const response = yield call(api.post, 'sessions', {
      email: payload.email,
      password: payload.password,
    });

    if (response.statusCode === 401) {
      toast.warn('🤷‍♂️ Usuario ou senhas incorretos!');
    }

    localStorage.setItem('@week:token', response.data.token);
    yield put(signInSuccess(response.data.token));

    history.push('/');
  } catch (error) {
    toast.error('🤷‍♂️ Erro no login!');
  }
}

function* signUp({ payload }) {
  try {
    const response = yield call(api.post, 'users', {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    });

    localStorage.setItem('@week:token', response.data.token);
    yield put(signUpSuccess(response.data.token));
    toast.success('🚀 Cadastrado com sucesso!');
    history.push('/');
  } catch (error) {
    toast.error('🤷‍♂️ Erro ao se cadastrar!');
  }
}

export default all([
  takeLatest('@user/SIGN_IN_REQUEST', signIn),
  takeLatest('@user/SIGN_UP_REQUEST', signUp),
]);
