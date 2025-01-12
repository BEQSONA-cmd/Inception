#include <iostream>
#include <fstream>
#include <sstream>
#include <sys/socket.h>
#include <netinet/in.h>
#include <unistd.h>

#define PORT 8080

std::string build_html() 
{
    std::ifstream html_file("index.html");
    if (!html_file.is_open())
        return NULL;

    std::ostringstream content_stream;
    content_stream << html_file.rdbuf();
    html_file.close();

    std::string response =
        "HTTP/1.1 200 OK\r\n"
        "Content-Type: text/html\r\n\r\n" + content_stream.str();
    return response;
}

int main() 
{
    // Create a server socket
    int server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd == -1)
        return 1;

    // Set up server address
    sockaddr_in server_addr{};
    server_addr.sin_family = AF_INET;
    server_addr.sin_port = htons(PORT);
    server_addr.sin_addr.s_addr = INADDR_ANY;

    // Bind the socket to the server address
    if (bind(server_fd, (sockaddr*)&server_addr, sizeof(server_addr)) == -1 
        || listen(server_fd, 5) == -1) 
    {
        close(server_fd);
        return 1;
    }

    std::cout << "Server is running on http://localhost:8080" << std::endl;

    while (true) 
    {
        sockaddr_in client_addr{};
        socklen_t client_len = sizeof(client_addr);
        int client_fd = accept(server_fd, (sockaddr*)&client_addr, &client_len);
        if (client_fd == -1)
            continue;

        std::string html = build_html();
        send(client_fd, html.c_str(), html.size(), 0);

        close(client_fd);
    }

    close(server_fd);
    return 0;
}
