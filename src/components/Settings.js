import React from 'react';
import Sidebar from "../../src/components/Sidebar";
import "../styles/Settings.css";

const Settings = () => (
<div>
<Sidebar />
<div class="card">
<div class="card-header">
<h5>Setting Options</h5>
</div>
<div class="card-block table-border-style">
<div class="table-responsive">
<table class="table">
<tbody>
<tr>
<td>Password</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-no-title">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Change your password here.</td>
</tr>
<tr>
<td>Privacy</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-rich">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Control who can view what information.</td>
</tr>
<tr>
<td>Public Profile</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-click">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Update your profile information, such as location, job title, etc.</td>
</tr>
<tr>
<td>Profile Picture</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-buttons">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Update your profile picture.</td>
 </tr>
<tr>
<td>Mobile Alerts</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-callbacks">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Control your mobile alerts.</td>
</tr>
<tr>
<td>Resume</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-progress">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Update your resume here. </td>
</tr>
<tr>
<td>Support</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-dynamic">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Having tech issues? Contact tech support here.</td>
</tr>
<tr>
<td>Customer Service</td>
<td>
<button type="button" class="btn btn-primary btn-sm" id="pnotify-multiline">Click here! <i class="icofont icofont-play-alt-2"></i></button>
</td>
<td>Contact our Customer Service team.</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

</div>
)

export default Settings