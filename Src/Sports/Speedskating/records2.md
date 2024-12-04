# Record Progression

<!-- %%% style:  ~/nav_bar            -->
<!-- %%% style:  ~/records            -->
<!-- %%% script: ~/nav_bar            -->
<!-- %%% script: ~/../Utils           -->
<!-- %%% script: ~/../Country_Data    -->
<!-- %%% script: ~/../Country         -->
<!-- %%% script: ~/../Venue           -->
<!-- %%% script: ~/../Athlete         -->
<!-- %%% script: ~/../Records         -->
<!-- %%% script: ~/rinks              -->
<!-- %%% script: ~/skaters            -->
<!-- %%% script: ~/events             -->
<!-- %%% script: ~/record_progression -->

<div id = "navigation2"></div>

<div id = 'description'></div>

### Record progression

<div id = "record_table"></div>

<canvas id = "record_chart"></canvas>

Start year: <span id = 'start_year_span'></span>
<button type = 'button' onclick = 'load_chart ()'>Apply</button>

<h3 class = "records-header">Lists of Records</h3>

<div class = "number-of-records">

<section class = "by-skater">
<h4> By Athlete</h4>
<div id = "skater_count" class = "padded"></div>
</section>

<section class = "by-duration">
<h4> By Duration</h4>
<div id = "duration_count" class = "padded"></div>
</section>

<section class = "by-improvement">
<h4> By Improvement </h4>
<div id = "improvement_count" class = "padded"></div>
</section>

<section class = "by-country">
<h4> By Country</h4>
<div id = "country_count" class = "padded"></div>
</section>

<section class = "by-rink">
<h4> By Venue</h4>
<div id = "rink_count" class = "padded"></div>
</section>
</div>
