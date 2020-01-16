export const fetchPins = () => (
    $.ajax({
        method: 'GET',
        url: 'api/pins'
    })
);

export const fetchUserPins = (id) => (
    $.ajax({
        method: 'GET',
        url: `api/users/${id}/pins`
    })
);

export const fetchPin = id => (
    $.ajax({
        method: 'GET',
        url: `api/pins/${id}`
    })
);

export const createPin = (formData) => (
    $.ajax({
        method: 'POST',
        url: 'api/pins',
        data: formData,
        contentType: false,
        processData: false 
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

export const createPinning = (pin_id, board_id) => (
    $.ajax({
        url: 'api/pinnings',
        method: 'POST',
        data: { pinning: {pin_id: pin_id, board_id: board_id }}
    })
)

export const deletePinning = id => (
    $.ajax({
        url: 'api/pinnings',
        method: 'DELETE',
        data: { id }
    })
)