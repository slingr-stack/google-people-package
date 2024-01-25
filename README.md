<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Google People package</td>
        <td>January 22, 2024</td>
        <td>Detailed description of the API of the Google People package.</td>
    </tr>
    </tbody>
</table>

# Important
The Google Contacts API is now Google People API.

# Overview

The People Package lets you:

 - Read and manage the authenticated user's Contacts
 - Read and copy the authenticated user's "Other contacts"
 - Read profile information for authenticated users and their contacts
 - Read domain profiles and contacts

## Configuration

### Client Id
The ID for your client application registered with the API provider.

### Client Secret
The client secret given to you by the API provider

### Scope
The scope of access you are requesting, which may include multiple space-separated values.

| Scope                                               | Description                                                      |
|------------------------------------------------------|------------------------------------------------------------------|
| https://www.googleapis.com/auth/contacts             | See, edit, download, and permanently delete your contacts        |
| https://www.googleapis.com/auth/contacts.other.readonly | See and download contact info automatically saved in your "Other contacts" |
| https://www.googleapis.com/auth/contacts.readonly    | See and download your contacts                                   |
| https://www.googleapis.com/auth/directory.readonly   | See and download your organization's GSuite directory            |
| https://www.googleapis.com/auth/user.addresses.read  | View your street addresses                                        |
| https://www.googleapis.com/auth/user.birthday.read   | See and download your exact date of birth                         |
| https://www.googleapis.com/auth/user.emails.read      | See and download all of your Google Account email addresses      |
| https://www.googleapis.com/auth/user.gender.read      | See your gender                                                  |
| https://www.googleapis.com/auth/user.organization.read | See your education, work history and org info                     |
| https://www.googleapis.com/auth/user.phonenumbers.read | See and download your personal phone numbers                     |
| https://www.googleapis.com/auth/userinfo.email        | See your primary Google Account email address                    |
| https://www.googleapis.com/auth/userinfo.profile      | See your personal info, including any personal info you've made publicly available |

### State
An opaque value to prevent cross-site request forgery.


# Javascript API

The Javascript API of the Google People package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `GET`,`PUT`,`PATCH`,`DELETE` requests to the [Google People API](https://developers.google.com/people) like this:
```javascript
var response = pkg.googlepeople.api.get('/contactGroups:batchGet')
var response = pkg.googlepeople.api.post('/contactGroups', body)
var response = pkg.googlepeople.api.put('/{contactGroup.resourceName=contactGroups/*}', body)
var response = pkg.googlepeople.api.patch('/{person.resourceName=people/*}:updateContact',body)
var response = pkg.googlepeople.api.delete('/{resourceName=people/*}:deleteContact')
```

#### Example
```javascript
var response = pkg.googlecontacts.api.get('/otherContacts?readMask=emailAddresses');
log(JSON.stringify(response));
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service?tab=readme-ov-file#overview)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the package. <br>
            Possible values are: <br>
            <i><strong>GET,PUT,PATCH,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this package will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/testPath<br>/path3<br>/path1/{testPath}<br>/path2?param2=' + httpOptions.query.param2 + '&param3=' + httpOptions.query.param3 + '<br>/path4<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>It Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true, the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty, the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Includes extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect a timeout interval in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read a timeout interval in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the package call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Dependencies
* HTTP Service (v1.3.7)
* Oauth Package (v1.0.24)

## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
