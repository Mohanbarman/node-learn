type ID = string;

interface MembersInterface {
    id: ID,
    name: string,
    age: number,
}

function generateDemoMembers() {
    let members:MembersInterface[] = [];

    for (let i = 1; i <= 50; i++) {
        members.push({
            id: String(i),
            age: Math.floor(Math.random() * 100 + 10),
            name: 'Lorem ipsum',
        })
    }

    return members;
}

export const demoMembers = generateDemoMembers();