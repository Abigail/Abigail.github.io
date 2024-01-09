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
    <td>200m</td>
    <td class = 'symbol'>&#x25A0;</td>
    <td class = 'symbol'>&#x25B2;</td>
    <td class = 'symbol'>&#x25CF;</td></tr>
<tr class = 'middle'>
    <td>200m</td>
    <td>500m</td>
    <td class = 'symbol'>&#x25A0;</td>
    <td class = 'symbol'>&#x25B2;</td>
    <td class = 'symbol'>&#x25CF;</td></tr>
<tr class = 'high'>
    <td>500m</td>
    <td></td>
    <td class = 'symbol'>&#x25A0;</td>
    <td class = 'symbol'>&#x25B2;</td>
    <td class = 'symbol'>&#x25CF;</td></tr>
</table>

<canvas id = "record_chart"></canvas>

Start year: <span id = 'start_year_span'></span>
<button type = 'button' onclick = 'load_chart ()'>Apply</button>

<h3 class = "number-of-records-header">Number of Records</h3>

<div class = "number-of-records">

<div class = "col-1">
<h4> By Skater </h4>
<div id = "skater_count" class = "padded"></div>
</div>

<div class = "col-2">
<h4> By Duration </h4>
<div id = "duration_count" class = "padded"></div>
</div>

<div class = "col-3">
<h4> By Rink </h4>
<div id = "rink_count" class = "padded"></div>
</div>

<div class = "col-4">
<h4> By Country </h4>
<div id = "country_count" class = "padded"></div>
</div>
</div>
