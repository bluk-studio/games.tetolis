function online() {
    var online = '%server_online%';
    if (online == 1) {
        return 'игрок';
    } else if (online >= 2 && online <= 4) {
        return 'игрока';
    } else if (online >= 5) {
        return 'игроков';
    } else {
        return '&4error';
    }
}
online();