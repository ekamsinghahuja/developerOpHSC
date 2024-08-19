## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

const fs = require('fs');
function cleanFile(filepath){
  fs.readFile(filepath,'utf8',(err,data)=>{
    if(err){
      console.log("error");
      return;
    }
    else{
        const cleanedContent = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File cleaned successfully');
        });
    }
  })
}

const filePath = 'path/to/your/file.txt';
cleanFile(filePath);