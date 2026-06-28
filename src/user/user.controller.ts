import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

const users = [
    {
        id: 1,
        name: 'Jon Doe',
        class: 9,
        province: 'Punjab',
        SchoolStatus: 'Government',
        Subjects: [
            'English',
            'Urdu',
            'Math',
            'Computer',
            'Physics',
            'Bio',
            'Islamiyat',
            'Al-quran',
        ],
    },
    {
        id: 2,
        name: 'Alice Khan',
        class: 10,
        province: 'Sindh',
        SchoolStatus: 'Private',
        Subjects: [
            'English',
            'Urdu',
            'Math',
            'Computer',
            'Physics',
            'Chemistry',
        ],
    },
    {
        id: 3,
        name: 'Bilal Ahmed',
        class: 8,
        province: 'KPK',
        SchoolStatus: 'Government',
        Subjects: [
            'English',
            'Urdu',
            'Math',
            'Science',
            'Islamiyat',
        ],
    },
    {
        id: 4,
        name: 'Sara Malik',
        class: 11,
        province: 'Balochistan',
        SchoolStatus: 'Private',
        Subjects: [
            'English',
            'Urdu',
            'Math',
            'Biology',
            'Computer',
            'Physics',
        ],
    },
];

@Controller('user')
export class UserController {
    @Get()
    getUser(@Query('name') name?: string | string[]) {
        if (!name) {
            return users;
        }

        const names = Array.isArray(name) ? name : [name];

        return users.filter((user) =>
            names.some((searchName) =>
                user.name.toLowerCase().includes(searchName.toLowerCase()),
            ),
        );
    }

    @Post()
    createUser(@Body() user: any) {
        const newUser = {
            id: users.length + 1,
            ...user,
        };

        users.push(newUser);

        return {
            message: 'User created successfully',
            user: newUser,
        };
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        const user = users.find((user) => user.id === Number(id));

        if (!user) {
            return {
                message: `User with id ${id} not found`,
            };
        }

        return user;
    }
}