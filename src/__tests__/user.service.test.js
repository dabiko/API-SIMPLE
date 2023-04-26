import test from 'ava';

import userService from "../services/user.service";

let sampleUser;
test.beforeEach(() => {
    sampleUser = {
        id: 1,
        name: 'Dabiko',
        email: 'dabiko.blaise@gmail.com',
        city: 'Douala',
        country: 'Cameroon',

    }
});
test('Adding new User test', (t) => {
    const expectedId = 1;

    const user = userService.addUser(sampleUser);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...sampleUser});
});

test('Get all user test', (t) => {

    const expectedId = 1;
    const user = userService.getAllUser();

    t.deepEqual(user[0], { id: expectedId, ...sampleUser});
});

test('Get User by ID test', (t) => {
    const expectedId = 1;
    const existingUser = {
        id: 1,
        name: 'Dabiko',
        email: 'dabiko.blaise@gmail.com',
        city: 'Douala',
        country: 'Cameroon',
    }

    const user = userService.getUser(expectedId, existingUser);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...existingUser});
});

test('Update user by ID test', (t) => {
    const expectedId = 2;
    const updatedDetails = {
        name: 'John',
        email: 'john@example.com',
        city: 'Douala',
        country: 'Cameroon',
    }

    const user = userService.updateUser(expectedId, updatedDetails);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...updatedDetails});
});

test('Delete user by ID test', (t) => {
    const expectedId = 3;
    const existingUser = {
        id: 3,
        name: 'Doe',
        email: 'doe@example.com',
        city: 'Yde',
        country: 'Cameroun',
    }

    const user = userService.removeUser(expectedId, existingUser);

    t.is(user.id, expectedId);
    t.deepEqual(user, { id: expectedId, ...existingUser});
});