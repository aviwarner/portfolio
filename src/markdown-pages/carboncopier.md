---
slug: "/carbon-copier"
date: "2020-11-04"
title: "Carbon Copier"
featuredImage: ../images/cc_ticket_view.jpg
---

### Overview

**[Carbon Copier](https://www.zendesk.com/apps/support/carbon-copier/)** was a Zendesk app that helps CC end-users when tickets are created for a specific organization or requester.

### App no longer supported / Available in Zendesk marketplace

Due to Zendesk's deprecation of HTTP targets which are used by the app to function, **this app is no longer supported and I have removed the listing from Zendesk's app marketplace**. As I no longer have Zendesk dev account, I haven't had a chance to explore how this could be converted. There are not plans to update the app.

I found this resource for creating Zendesk webhooks: https://support.zendesk.com/hc/en-us/articles/1260803996569-Creating-a-webhook

Here's the setup for the current target, it looks like there are fields on webhooks that are equivalent: 

```
URL: 
https://YOURSUBDOMAIN.zendesk.com/api/v2/tickets/{{ticket.id}}.json
Method: PUT
Content Type: JSON
Username: youremail@yourdomain.com/token
Password: Generated API Token
At that point, you should be able to create a new trigger that sends the following body to your new target: 
{
  "ticket": {
    "additional_collaborators": 
      "{{ticket.organization.custom_fields.org_cc}},
      {{ticket.requester.custom_fields.user_cc}}"
  }
}
```

You'll need to create a new webhook and make sure it's authenticated properly. Please reach out to support@zendesk.com for assistance using their webhook feature.
