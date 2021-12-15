const request = require('supertest');
const app = require('../../src/app');
const httpStatus = require('http-status');

const mockUser = { phoneNo: '1234567890', firstName: 'Jay', lastName: 'Khant' };

jest.mock('../../src/services/user.service.js', () => {
    return {
        create: jest.fn().mockImplementation(() => mockUser),
        findAll: jest.fn().mockImplementation(() => [mockUser]),
        findOne: jest.fn().mockImplementation((id) => {
            return {
                id,
                ...mockUser
            }
        }),
        update: jest.fn().mockImplementation((id) => {
            return {
                id,
                ...mockUser
            }
        }),
        remove: jest.fn().mockImplementation((id) => {
            return {
                id,
                ...mockUser
            }
        }),
    }
});

describe('Users', () => {

    describe('/v1/users (GET)', () => {
        it('should find users', () => {
            return request(app)
                .get('/v1/users')
                .query()
                .expect(httpStatus.OK)
                .expect([mockUser]);
        });

        it('should find user by id', () => {
            const id = "5ebac534954b54139806c112"
            return request(app)
                .get(`/v1/users/${id}`)
                .expect({
                    id,
                    ...mockUser
                });
        });
    })

    describe('/v1/users (POST)', () => {
        it('should create user', () => {
            return request(app)
                .post('/v1/users')
                .send(mockUser)
                .expect(httpStatus.CREATED)
                .expect({
                    ...mockUser
                });
        });
    });

    describe('/v1/users (UPDATE)', () => {
        it('should update user', async () => {
            const id = "5ebac534954b54139806c112"
            await request(app)
                .patch(`/v1/users/${id}`)
                .send(mockUser)
                .expect(httpStatus.OK)
                .expect({ id, ...mockUser })
        });
    });

    describe('/v1/users (DELETE)', () => {
        it('should delete user', async () => {
            const id = "5ebac534954b54139806c112"
            await request(app)
                .delete(`/v1/users/${id}`)
                .query({ id })
                .expect(httpStatus.OK)
                .expect({ id, ...mockUser })
        });
    });
})  
