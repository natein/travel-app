export function sightGalleryDataAdapter(data) {
    const sights = [];

    data.map((el) => {
        return sights.push({
            original:el.image,
            thumbnail:el.image,
            description:el.description,
        })
    })

    return sights;
}


