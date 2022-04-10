const fs = require('fs');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const cht = require('gulp-cht');

gulp.task('mini', () => {
    // gulp.src('./index.html')
    // .pipe(cht())
    // .pipe(rename("zh-HK.html"))
    // .pipe(gulp.dest("./"));

    return gulp.src('script/relationship.js')
    .pipe(uglify({
        output:{
            comments: function(node, comment){
                return /^!/.test(comment.value);
            }
        }
    }))
    .pipe(rename("relationship.min.js"))
    .pipe(gulp.dest('dist/'))
    .pipe(cht())
    .pipe(rename("relationship.zh-HK.min.js"))
    .pipe(gulp.dest('dist/'))
});
