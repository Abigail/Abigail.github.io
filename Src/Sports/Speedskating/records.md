# Record Progression

<div id = "navigation"></div>

### Record progression

<div id = "record_table"></div>

### Rink Symbols
<table id = "rink_type">
<tr><th colspan = 2>Elevation</th>
    <th colspan = 2>Outdoor</th>
    <th>Indoor</th></tr>
<tr><th>Min</th>
    <th>Max</th>
    <th>Natural</th>
    <th colspan = 2>Artificial</th></tr>
<tr class = 'low'>
    <td></td>
    <td>300m</td>
    <td class = 'symbol'>&#x25A0;</td>
    <td class = 'symbol'>&#x25B2;</td>
    <td class = 'symbol'>&#x25CF;</td></tr>
<tr class = 'middle'>
    <td>300m</td>
    <td>1000m</td>
    <td class = 'symbol'>&#x25A0;</td>
    <td class = 'symbol'>&#x25B2;</td>
    <td class = 'symbol'>&#x25CF;</td></tr>
<tr class = 'high'>
    <td>1000m</td>
    <td></td>
    <td class = 'symbol'>&#x25A0;</td>
    <td class = 'symbol'>&#x25B2;</td>
    <td class = 'symbol'>&#x25CF;</td></tr>
</table>

<canvas id = "record_chart"></canvas>

Start year: <span id = 'start_year_span'></span>
<button type = 'button' onclick = 'load_chart ()'>Apply</button>

<h3 class = "records-header">Lists of Records</h3>

<div class = "number-of-records">

<section class = "by-skater">
<h4> By Skater </h4>
<div id = "skater_count" class = "padded"></div>
</section>

<section class = "by-duration">
<h4> By Duration </h4>
<div id = "duration_count" class = "padded"></div>
</section>

<section class = "by-improvement">
<h4> By Improvement </h4>
<div id = "improvement_count" class = "padded"></div>
</section>

<section class = "by-country">
<h4> By Country </h4>
<div id = "country_count" class = "padded"></div>
</section>

<section class = "by-rink">
<h4> By Rink </h4>
<div id = "rink_count" class = "padded"></div>
</section>
</div>
