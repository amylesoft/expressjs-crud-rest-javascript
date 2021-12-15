const { User } = require('../../../src/models');

describe('User model', () => {
    describe('User validation', () => {
        let mockUser;
        beforeEach(() => {
            mockUser = {
                firstName: 'Jay',
                lastName: 'Khant',
                phoneNo: '7567676230',
            };
        });

        it('should correctly validate a valid user', async () => {
            await expect(new User(mockUser).validate()).resolves.toBeUndefined();
        });

        it('should throw a validation error if firstName is empty', async () => {
            mockUser.firstName = '';
            await expect(new User(mockUser).validate()).rejects.toThrow();
        });  

        it('should throw a validation error if lastName is empty', async () => {
            mockUser.lastName = '';
            await expect(new User(mockUser).validate()).rejects.toThrow();
        });  

        it('should throw a validation error if phoneNo is empty', async () => {
            mockUser.phoneNo = '';
            await expect(new User(mockUser).validate()).rejects.toThrow();
        });  
    });
});