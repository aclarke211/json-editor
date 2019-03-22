# To-Do [JSON Editor]

## Ability to Update ALL JSON
Use the recently added event 'bus' in **jsonEditorContainer.vue**.\
Currently, have it so it always updates 'Spot 1's Title'.\
Needs to be able to update entire content.

Could do this either by passing entire content to a JSON field and emitting it each time, or by emitting out infomation such as location of the field within the JSON, then dynamically update that part of the content in the jsonContentContainer.
