function decscribeCities(cities, country) {
    if (cities === void 0) { cities = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, " is in ").concat(country));
}
decscribeCities();
decscribeCities("Lahore");
decscribeCities("Multan");
decscribeCities("Peshawar");
decscribeCities("Dehli", "India");
