---
title: Contact Us
layout: default
---

<form action="http://getsimpleform.com/messages?form_api_token=4434e7e861fb97e90034d01e5b9a6427" method="post">
<div class="form-group">
    <div class="form-inline">
        <p><div class="form-group">
            <input type="text" class="form-control" name="name" placeholder="name"/>
        </div>
        <p><div class="form-group">
            <input type="text" class="form-control" name="email" placeholder="email"/>
        </div>
        <p><div class="form-group">
            <input type="text" class="form-control" name="subject" placeholder="subject"/>
        </div>
        <p><div class="form-group">
            <textarea type="text" class="form-control" name="message" placeholder="message" style="width:400px;height:125px;"></textarea>
        </div>
        <p><div class="form-group">
            <input type='submit' value='Send' />
        </div>
        <input type='hidden' name='redirect_to' value='{{ site.url }}/thanks' />
    </div>
</div>
</form>
