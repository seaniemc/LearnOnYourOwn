package todoapp.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "photo.files")
public class Images {
	@Id
	private String id;
	private String filename;
	private String aliases;
	private String chunkSize;
	private String uploadDate;
	private String length;
	private String contentType;
	private String md5;

	// default constructor
	public Images() {
	}

	public Images(String filename, String aliases, String chunkSize, String uploadDate, String length,
			String contentType, String md5) {
		super();
		this.filename = filename;
		this.aliases = aliases;
		this.chunkSize = chunkSize;
		this.uploadDate = uploadDate;
		this.length = length;
		this.contentType = contentType;
		this.md5 = md5;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getAliases() {
		return aliases;
	}

	public void setAliases(String aliases) {
		this.aliases = aliases;
	}

	public String getChunkSize() {
		return chunkSize;
	}

	public void setChunkSize(String chunkSize) {
		this.chunkSize = chunkSize;
	}

	public String getUploadDate() {
		return uploadDate;
	}

	public void setUploadDate(String uploadDate) {
		this.uploadDate = uploadDate;
	}

	public String getLength() {
		return length;
	}

	public void setLength(String length) {
		this.length = length;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getMd5() {
		return md5;
	}

	public void setMd5(String md5) {
		this.md5 = md5;
	}

	@Override
	public String toString() {
		return "Images{" + "id='" + id + "'" + ", filename='" + filename + "'" + ", aliases='" + aliases + "'"
				+ ", chunkSize='" + chunkSize + ", uploadDate='" + uploadDate + ", length='" + length + ", contentType='" + contentType + ", md5='" + md5 + "'" + '}';
	}

}
