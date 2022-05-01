export const WORDS = {

}

interface Team {
    key: string
    team_number: number
    nickname: string
    name: string
    city: string
    state_prov: string
    country: string
}

function getTeams(): Promise<Team[]> {
    // For now, consider the data is stored on a static `users.json` file
    return fetch('https://www.thebluealliance.com/api/v3/teams/0/simple?X-TBA-Auth-Key=Sg9w9gKruIUFmC5d8rjZ3l1B4K6Sp9kw5JcxInjveaBwiLWwMwP30DdD6NXG0gPD')
        // the JSON body is taken from the response
        .then(res => res.json())
        .then(res => {
                // The response has an `any` type, so we need to cast
                // it to the `User` type, and return it from the promise
                return res as Team[]
        })
}
