        document.write("<table>");
        for (let i = 1; i <= 10; i++) {
            document.write("<tr>");
            for (let j = 1; j <= 10; j++) {
                document.write("<td>Celda" + i + "_" + j + " </td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");