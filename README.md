We've built an API to store information about DOTA2 professional teams in files.

Call the fileStore.createFile function with two arguments: an object (representing a team, whose first property must be "teamName:") and a blank function to create a new file to hold the object in JSON format. The file's name will be populated with the "teamName" value of the object.

Call the fileStore.fetchFile function with two arguments: a string (lowercase, no spaces) of the team name whose file you'd like to retrieve, and a function that returns (or logs) the data (function(err, data) {return data};) to retrieve an individual file's contents.

Call the fileStore.fetchDir function with two arguments: a directory name and a function that returns (or logs) the data (function(err, data) {return data};) to retrieve an alphabetically sorted list of all files in the directory.

Call the fileStore.fetchMultiFile function with two arguments: an array of team names (lowercase, no spaces) and a function that returns (or logs) the data (function(err, data) {return data};) to retrieve the contents of all files in the input array, but sorted alphabetically by filename (teamName).