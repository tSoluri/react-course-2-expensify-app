import { login, logout } from '../../actions/auth';

test('Should login to application', () => {
    const action = login(12345);
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 12345
    });
});

test('Should logout of application', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});