module.exports = function(grunt) {

    var log = grunt.log;
    var file = grunt.file;

    grunt.registerMultiTask("mv",
        "moves files.", function() {

        // Move files.
        var files = file.expand(this.data);
        file.write(this.target, grunt.helper('mv', files));

        // Fail task if errors were logged.
        if (grunt.errors) { return false; }

        // Otherwise, print a success message.
        log.writeln("File \"" + this.target + "\" created.");
    });

    grunt.registerHelper("mv", function(files) {
        // move files
        return files ? files.map(function(filepath) {
            return file.read(filepath);
        }).join("") : "";
    });
    
};