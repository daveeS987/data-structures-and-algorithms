def business_trip(graph, array):

    sum = 0

    for index, city in enumerate(array):
        if index < len(array) - 2:
            next_city = array[index + 1]

            if city not in graph._adjacency_list or next_city not in graph._adjacency_list:
                return f"False, $0"

            found = False
            neighbors = graph.get_neighbors(city)
            for edge in neighbors:
                if edge.vertex == next_city:
                    sum += edge.weight
                    found = True
            if found == False:
                return f"False, $0"

    return f"True, ${sum}"
