// Energiser ScoreBoard
    // ********   BACKEND   *********
        // Download everything - NPX gererator - Middleware, router etc set up, npm i pg, dotenv, express, 
        // package.json - script shortcuts
       
        //Database/ Scripts
            // Database Set up index.js - Connectiong to Heroku - .env etc
            // 2 Tables
                // usersTable
                    // Columns - User_Id *, firstName, secondName, userName
                // games
                    //Columns - Game_iD, Game_Played, Date, User_Id *, Wins , ++Points
        
        //Server & Node.js
            // Models
                //Functions
                    // Async Functions
                        // Module.exports = { addUser, addGame, getAllWins, deleteGameRowById, displayTop5All,
                        //                   displayTop5Game, getWinsByDate, getGameWinsByDate, 
                        //                  }

            //App - POSTGRESQL commands / ROUTES
            //GET REQUESTS
                // -> Get Request - Get All Wins for All Users SELECT userName, Wins FROM usersTable INNERJOIN Ascending
                // -> Get Request - Top 5 Winning Users overall
                // -> Get Request - Top 5 Winning Users for specific games
                // -> Get Request - By Date
                    // _> Get Request - Get Specific Game Wins by Date 
                    // -> Get Request - Specific User info - COMPLEX
            //POST REQUESTS
                // -> Post Request - Input User information - creates a new User in UserTable
                // -> Post Request - User inputs game information - goes into gamesTable
            //DELETE REQUESTS
                // -> Delete Request - user can delete a game if input wrong
            //BONUS REQUESTS
                // -> Put Request - user can edit a game - replace the game row
                // -> Put/Patch - user can edit user info

    // ********   FRONT   *********
        // What we want our Users to do
            // POST REQUESTS - Input 
                // Input a user 
                    // Entry Form  
                        // - COMPLEXITY - Do you wnat to set up a user - then bring up Input Form
                    // HTML Form
                        // User Input - input Form - Firstname, Surname, USerName - Submit
                // Enter Game Info
                    // HTML FORM
                        // Enter Game information - game played, data playes, wins, username/id etc
                
            // GET REQUESTS - Display/Output
                // DIV - which displays our information
                    // Games Drop Down - All, Game1, Game2, Game3
                    // Userwise Drop Down - All users, Top5, Top10
                // Submit Button
                            // COMPLEX Date Drop Down - 
                // Display in List 
                            // COMPLEX Bit is display in a TABLE
                    

                




