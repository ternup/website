delayThenCall = (millisecs) ->
    d = Q.defer()
    setTimeout () ->
        d.resolve()
    , millisecs
    d.promise

animation = () ->
    delayThenCall(2000)
    .then () ->
        $("#subheader").html "is noise"
        delayThenCall(2000)
    .then () ->
        $("#subheader").html "is open"
        delayThenCall(2000)
    .then () ->
        $("#subheader").html "is hacktive"
        delayThenCall(2000)
    .then () -> $("#subheader").html "is a nebulous collective of people from different backgrounds working together on what feels right"

$ ->
    animation().then(animation).then(animation)
