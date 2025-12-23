https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.leads.ALL&client_id=1000.JO4RDZU5MC4DLUH4O64CN7UV7DUCKB&response_type=code&access_type=offline&redirect_uri=http://google.com/


{
    "access_token": "1000.6a3e20b46592380d95deaa8b0dbc3eff.08f701f51f023a54743922a22b43a79d",
    "scope": "ZohoCRM.modules.leads.ALL",
    "api_domain": "https://www.zohoapis.com",
    "token_type": "Bearer",
    "expires_in": 3600
}

POST : https://www.zohoapis.com/crm/v8/Leads

# Data to push into CRM while submitting contact form  any where in the webap
{
  "data": [
    {
      "Last_Name": "Tester",
      "Email": "",
      "Mobile": "",
      "Lead_Source": "",
      "Interested_Course": "",
      "Lead_Received_Date": "2025-12-19",
      "Lead_Status": "1. Inquiry Received",
      "Assignee": "-None-",
      "nationality": "",
      "Description": "Which Tab like Diploma , WSQ and Which Course "
            
    }
  ]
}