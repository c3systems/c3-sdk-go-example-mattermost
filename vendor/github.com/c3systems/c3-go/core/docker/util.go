package docker

import "regexp"

// ShortImageID ...
func ShortImageID(imageID string) string {
	re := regexp.MustCompile(`(sha256:)?([0-9a-zA-Z]{12}).*`)
	return re.ReplaceAllString(imageID, `$2`)
}

// ShortContainerID ...
func ShortContainerID(containerID string) string {
	re := regexp.MustCompile(`([0-9a-zA-Z]{12}).*`)
	return re.ReplaceAllString(containerID, `$1`)
}
