$(document).ready(function(){
    let cloud = "";
    cloud += $('span#s1').text() + ' '
    cloud += $('b.s2').text() + ' '
    cloud += $('#second i').text() + ' '
    cloud += $('q[title="hello"]').text() + ' '
    cloud += $('[target="_blank"]').text() + ' '
    cloud += $('span.extra:eq(2)').text() + ' '
    console.log(cloud);
})