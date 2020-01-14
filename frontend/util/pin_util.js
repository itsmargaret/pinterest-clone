export const fetchPins = () => (
    $.ajax({
        method: 'GET',
        url: 'api/pins'
    })
);

export const fetchPin = id => (
    $.ajax({
        method: 'GET',
        url: `api/pins/${id}`
    })
);

export const createPin = pin => (
    $.ajax({
        method: 'POST',
        url: 'api/pins',
        data: { pin }
    })
);

export const updatePin = pin => (
    $.ajax({
        method: 'PATCH',
        url: `api/pins/${pin.id}`,
        data: { pin }
    })
);

export const deletePin = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/pins/${id}`
    })
);

export const createPinning = id => (
    $.ajax({
        url: 'api/pinnings',
        method: 'POST',
        data: { id }
    })
)

export const deletePinning = id => (
    $.ajax({
        url: 'api/pinnings',
        method: 'DELETE',
        data: { id }
    })
)