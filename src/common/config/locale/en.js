'use strict';

export default {
    CONTROLLER_NOT_FOUND: "controller `%s` not found. url is `%s`.",
    CONTROLLER_INVALID: "controller `%s` is not valid. url is `%s`",
    ACTION_NOT_FOUND: "action `%s` not found. url is `%s`",
    ACTION_INVALID: "action `%s` is not valid. url is `%s`",
    WORKER_DIED: "worker `%d` died, it will auto restart.",
    MIDDLEWARE_NOT_FOUND: "middleware `%s` not found",
    ADAPTER_NOT_FOUND: "adapter `%s` not found",
    GCTYPE_MUST_SET: "instance must have gcType property",
    CONFIG_NOT_FUNCTION: "config `%s` is not a function",
    CONFIG_NOT_VALID: "config `%s` is not valid",
    PATH_EMPTY: "`%s` path muse be set",
    PATH_NOT_EXIST: "`%s` is not exist",
    TEMPLATE_NOT_EXIST: "can\"t find template file `%s`",
    PARAMS_EMPTY: "params `%s` value can\"t empty",
    PARAMS_NOT_VALID: "params `{name}` value not valid",
    FIELD_KEY_NOT_VALID: "field `%s` in where condition is not valid",
    DATA_EMPTY: "data can not be empty",
    MISS_WHERE_CONDITION: "miss where condition",
    INVALID_WHERE_CONDITION_KEY: "where condition key is not valid",
    WHERE_CONDITION_INVALID: "where condition `%s`:`%s` is not valid",
    TABLE_NO_COLUMNS: "table `%s` has no columns",
    NOT_SUPPORT_TRANSACTION: "table engine is not support transaction",
    DATA_MUST_BE_ARRAY: "data is not an array list",
    PARAMS_TYPE_INVALID: "params `{name}` type invalid",
    DISALLOW_PORT: "proxy on, cannot visit with port",
    SERVICE_UNAVAILABLE: "Service Unavailable",

    validate_required: "{name} can not be blank",
    validate_contains: "{name} need contains {args}",
    validate_equals: "{name} need match {args}",
    validate_different: "{name} nedd not match {args}",
    validate_after: "{name} need a date that\"s after the {args} (defaults to now)",
    validate_alpha: "{name} need contains only letters (a-zA-Z)",
    validate_alphaDash: "{name} need contains only letters and dashes(a-zA-Z_)",
    validate_alphaNumeric: "{name} need contains only letters and numeric(a-zA-Z0-9)",
    validate_alphaNumericDash: "{name} need contains only letters, numeric and dash(a-zA-Z0-9_)",
    validate_ascii: "{name} need contains ASCII chars only",
    validate_base64: "{name} need a valid base64 encoded",
    validate_before: "{name} need a date that\"s before the {args} (defaults to now)",
    validate_byteLength: "{name} need length (in bytes) falls in {args}",
    validate_creditcard: "{name} need a valid credit card",
    validate_currency: "{name} need a valid currency amount",
    validate_date: "{name} need a date",
    validate_decimal: "{name} need a decimal number",
    validate_divisibleBy: "{name} need a number that\"s divisible by {args}",
    validate_email: "{name} need an email",
    validate_fqdn: "{name} need a fully qualified domain name",
    validate_float: "{name} need a float in {args}",
    validate_fullWidth: "{name} need contains any full-width chars",
    validate_halfWidth: "{name} need contains any half-width chars",
    validate_hexColor: "{name} need a hexadecimal color",
    validate_hex: "{name} need a hexadecimal number",
    validate_ip: "{name} need an IP (version 4 or 6)",
    validate_ip4: "{name} need an IP (version 4)",
    validate_ip6: "{name} need an IP (version 6)",
    validate_isbn: "{name} need an ISBN (version 10 or 13)",
    validate_isin: "{name} need an ISIN (stock/security identifier)",
    validate_iso8601: "{name} need a valid ISO 8601 date",
    validate_in: "{name} need in an array of {args}",
    validate_notIn: "{name} need not in an array of {args}",
    validate_int: "{name} need an integer",
    validate_min: "{name} need an integer greater than {args}",
    validate_max: "{name} need an integer less than {args}",
    validate_length: "{name} need length falls in {args}",
    validate_minLength: "{name} need length is max than {args}",
    validate_maxLength: "{name} need length is min than {args}",
    validate_lowercase: "{name} need is lowercase",
    validate_mobile: "{name} need is a mobile phone number",
    validate_mongoId: "{name} need is a valid hex-encoded representation of a MongoDB ObjectId",
    validate_multibyte: "{name} need contains one or more multibyte chars",
    validate_url: "{name} need an URL",
    validate_uppercase: "{name} need uppercase",
    validate_variableWidth: "{name} need contains a mixture of full and half-width chars",
    validate_order: "{name} need a valid sql order string",
    validate_field: "{name} need a valid sql field string",
    validate_image: "{name} need a valid image file",
    validate_startWith: "{name} need start with {args}",
    validate_endWidth: "{name} need end with {args}",
    validate_string: "{name} need a string",
    validate_array: "{name} need an array",
    validate_boolean: "{name} need a boolean",
    validate_object: "{name} need an object"
};