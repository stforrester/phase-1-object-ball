function gameObject() {
    const teamsObj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black","White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise","Purple"],
            players: {
                "Jeff Adrien":  {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
    return teamsObj;
}

function numPointsScored(name) {
    const game = gameObject();
    for (const teamKey in game) {
        const playersObj = game[teamKey]["players"];
        for (const playerKey in playersObj) {
            if (playerKey === name) {
                const playerStats = playersObj[playerKey];
                return playerStats.points;
            }
        }
        }
    }

function shoeSize(name) {
    const game = gameObject();
    for (const teamKey in game) {
        const playersObj = game[teamKey]["players"];
        for (const playerKey in playersObj) {
            if (playerKey === name) {
                const playerStats = playersObj[playerKey];
                return playerStats.shoe;
            }
        }
        }
    }

function teamColors(team) {
    const game = gameObject();
    for (const teamKey in game) {
        if (game[teamKey]["teamName"] === team) {
            return game[teamKey]["colors"];
        }
    }
}

function teamNames() {
    const game = gameObject();
    const teams = [];
    for (const teamKey in game) {
        teams.push(game[teamKey].teamName);
    }
    return teams;
}

function playerNumbers(team) {
    const game = gameObject();
    const teamJerseyNumbers = [];
    for (const teamKey in game) {
        if (game[teamKey].teamName === team) {
            const rosterObj = game[teamKey].players;
            for (const player in rosterObj) {
                teamJerseyNumbers.push(rosterObj[player].number);
            }
        }
    }
    return teamJerseyNumbers;
}

function playerStats(name) {
    const game = gameObject();
    for (const teamKey in game) {
        const playersObj = game[teamKey]["players"];
        for (const playerKey in playersObj) {
            if (playerKey === name) {
                const playerStats = playersObj[playerKey];
                return playerStats;
            }
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoe = game.home.players["Alan Anderson"];
    for (const teamKey in game) {
        const roster = game[teamKey].players;
        for (const player in roster) {
            if (roster[player].shoe > biggestShoe.shoe) {
                biggestShoe = roster[player];
            }
        }
    }
    return biggestShoe.rebounds;
}