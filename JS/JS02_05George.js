/**
 * Created by jour on 5/21/2015.
 */
document.write(
    "<table>" +
    "<tr>" +
    "<td>"
);
for (var iPosition=0; iPosition<100; iPosition++){
    document.write(
        "<li>"+ "This is line number " + (iPosition+1) + "</li>"
    );
}
document.write(
    "</ol>"
);
document.write
(
    "<table>" +
    "<thead>" +
    "<th>" + "<strong>" + "X" + "</strong>" + "</th>" +
    "<th>" +  "<strong>" + "Y" +  "</strong>" + "</th>" +
    "<th>" +  "<strong>" + "Z" +  "<strong>" + "</th>" +
    "</head>"
);

for (var iPosition = 1; iPosition < 124; iPosition++) {
    document.write(
        "<tr><td>" + "X" + iPosition + "</td>" +
        "<td>" + "Y" + iPosition + "</td>" +
        "<td>" + "Z" + iPosition + "</td></tr>"
    );
}
document.write(
    "</div>" +
    "</table>"
);
