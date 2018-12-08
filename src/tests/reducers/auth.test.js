import authReducer from '../../reducers/auth';

test('Should login', () => {
    const action = {
        type: 'LOGIN',
        uid: 12345
    };
    const state = authReducer({}, action);
    expect(state).toEqual( { uid: 12345} );
});

test('Should logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 345673333 }, action);
    expect(state).toEqual( {} );
});