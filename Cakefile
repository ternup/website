fs = require 'fs'
{exec} = require 'child_process'

task 'compile', 'Compile all coffee script files', ->
    exec "coffee -o js/ -bc coffee/", (err, sto, ste) ->
        if err?
            console.log "Error: #{err}"
        else
            console.log "successfully built"


task 'upload', 'Upload to AWS S3', ->
    exec "s3cmd --delete-removed --exclude=*.swp --exclude=.git* --exclude=Cakefile sync . s3://ternup.com/", (err, sto, ste) ->
        console.log sto
        if err?
            console.log "Error: #{err}"
        else
            console.log "successfully uploaded"
