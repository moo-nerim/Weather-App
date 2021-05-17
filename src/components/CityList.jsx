function CityList(props) {
    // const cities = props.cities;
    const { cities } = props;

    return (
        <div>
            <fieldset id="field_CityList"><legend id="t_CityList">CityList</legend>
                <ul id="id_CityList">
                    {cities.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}

                </ul>
            </fieldset>
        </div>
    );
}

export default CityList;