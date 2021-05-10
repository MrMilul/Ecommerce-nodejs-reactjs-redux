SERVER:
1.Go to server directory and comment:

    npm run initial
    npm start

2.In the server directory:
    if (Linux){

    touch .env 
    
    echo DATABASE_LINK=write your atlas connection link >> .env
    echo JWT_SECRET=your secret word for making Token >> .env
    } 

    
    
    else{
        make it manually 

    }
    

CLIENT:
Go to client directory and comment:

    npm install 
    npm start

